import { useState, useEffect, useRef } from "react";

import { v4 as uuidv4 } from 'uuid';
import { ToastContainer, toast, Bounce } from 'react-toastify';

const Dashboard = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [logins, setlogins] = useState([]);
  const [formData, setFormData] = useState({
    id: null,
    website: "",
    email: "",
    username: "",
    password: "",
  })
  const [visiblePasswordIndex, setVisiblePasswordIndex] = useState(null);
  const [deletePopup, setDeletePopup] = useState(false)
  const [selectedId, setSelectedId] = useState(null)
  const [searchQuery, setSearchQuery] = useState("");

  //Local Storage
  useEffect(() => {
    const savedLogins = localStorage.getItem("logins");
    if (savedLogins) {
      setlogins(JSON.parse(savedLogins));
    }
  }, []);

  useEffect(() => {
    if (logins.length > 0) {
      localStorage.setItem("logins", JSON.stringify(logins));
    }
  }, [logins]);


  //Saving Function
  const handleSave = () => {
    if (!formData.website || !formData.username || !formData.password || !formData.email) {
      return
    }

    if (formData.id) {
      const updatedLogins = logins.map(item => item.id === formData.id ? formData : item)
      setlogins(updatedLogins);
      toast.success('Login Updated!');
    }
    else {
      const newLogin = {
        id: uuidv4(),
        website: formData.website,
        email: formData.email,
        username: formData.username,
        password: formData.password
      }

      setlogins([...logins, newLogin]);
      toast.success('Login Saved!');
    }

    setFormData({
      website: "",
      username: "",
      email: "",
      password: ""
    });
    setIsOpen(false);

  }

  //Delete function
  const handleDeleteLogin = (id) => {
    const updatedLogins = logins.filter(login => login.id !== id);
    setlogins(updatedLogins);
    localStorage.setItem("logins", JSON.stringify(updatedLogins));
    toast.error('Deleted!', {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
    setDeletePopup(false);
  }

  //Edit Function
  const handleEdit = (id) => {
    const loginToEdit = logins.find(item => item.id === id)
    setFormData({ ...loginToEdit })
    setIsOpen(true)
  }

  //Website Favicon helper
  const getDisplayDomain = (website) => {
    try {
      const url = website.startsWith("http")
        ? new URL(website)
        : new URL(`https://${website}`);

      return url.hostname.replace(/^www\./, "");
    } catch {
      return website;
    }
  }

  //Search Function
  const filteredLogins = logins.filter((login) => {
    const query = searchQuery.toLowerCase();
    return (
      login.website.toLowerCase().includes(query) ||
      login.email.toLowerCase().includes(query) ||
      login.username.toLowerCase().includes(query)
    );
  });

  //Copy Function
  const copyToClipboard = (text) => {
  if (!text) return;
  window.navigator.clipboard.writeText(text);
  toast.success('Copied to clipboard!', {
    position: "top-right",
    autoClose: 1000,
    hideProgressBar: true,
    theme: "light",
    transition: Bounce,
  });
};
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />

      <div className="container mx-auto flex flex-col gap-2 lg:flex-row items-start md:justify-between px-5 md:w-[90%] md:px-0 lg:w-3/4 lg:items-center my-3">
        <div className='flex flex-col gap-2'>
          <div className="text-2xl md:text-3xl font-bold text-slate-900">Dashboard</div>
          <div className='text-slate-600 text-sm md:text-base'>Manage and organize your saved login details</div>
        </div>
        <div className='flex my-3 md:my-0 flex-col gap-3 lg:items-end'>
          <button onClick={() => setIsOpen(true)} className="bg-slate-950 py-3 px-4 text-sm md:text-base font-bold text-white flex items-center justify-center gap-1 w-fit rounded-full hover:cursor-pointer">
            <img className='w-6' src="/src/assets/add-icon.svg" alt="add-icon" />Add New Login
          </button>
          <div className='relative'>
            <img className='w-6 absolute left-3 top-2' src="/src/assets/search-icon.svg" alt="" />
            <input value={searchQuery} onChange={(e) => { setSearchQuery(e.target.value) }} className='bg-white pl-11 py-2 rounded-full shadow-[0px_0px_5px_0px_rgba(0,0,0,0.15)] w-70 md:w-90' type="text" placeholder='Search' />
          </div>
        </div>
      </div>

      <div className="max-h-125 overflow-x-auto overflow-y-auto shadow-[0px_0px_5px_0px_rgba(0,0,0,0.1)] scrollbar-custom
                       container mx-auto w-[90%] lg:w-3/4 bg-[#ffffffcd] rounded-lg">
        <table className="min-w-full lg:w-full table-fixed text-sm text-left text-body">
          <thead>
            <tr className="border-b border-[#0000001b]">
              <th scope="col" className="px-4 py-3 font-medium w-1/5">
                Website
              </th>
              <th scope="col" className="px-4 py-3 font-medium w-1/4">
                Email
              </th>
              <th scope="col" className="px-4 py-3 font-medium w-1/5">
                Username
              </th>
              <th scope="col" className="px-4 py-3 font-medium w-1/5">
                Password
              </th>
              <th scope="col" className="px-4 py-3 font-medium w-1/3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredLogins.length === 0 ? (
              <tr>
                <td colSpan={5} className="px-6 py-12 text-center">
                  <p className="text-gray-500 mb-3">
                    {searchQuery ? `No results found for "${searchQuery}"` : "No logins added yet"}
                  </p>
                </td>
              </tr>
            )
              : (
                filteredLogins.map((login, index) => (
                  <tr key={index}>
                    <td className="px-4 py-4">
                      <div className="flex gap-2 items-center">
                        <img
                          src={`https://favicone.com/${getDisplayDomain(login.website)}?s=32`}
                          className="w-5 h-5 rounded-sm"
                          alt="favicon"
                          onError={(e) => {
                            e.currentTarget.src = "/src/assets/default-globe-icon.svg";
                          }}
                        />

                        <span className="truncate text-md font-medium">
                          {getDisplayDomain(login.website)}
                        </span>
                      </div>
                    </td>

                    <td className="px-4 py-4">
                      <div className="flex gap-2 items-center">
                        <span className="truncate">
                          {login.email}
                        </span>
                        <span>
                          <img onClick={() => copyToClipboard(login.email)} className="w-4 hover:cursor-pointer active:scale-85 transition-transform" src="/src/assets/copy-icon.svg" alt="copy-icon" />
                        </span>
                      </div>
                    </td>

                    <td className="px-4 py-4">
                      <div className="flex gap-2 items-center">
                        <span className="truncate">
                          {login.username}
                        </span>
                        <span>
                          <img onClick={() => copyToClipboard(login.username)} className="w-4 hover:cursor-pointer active:scale-85 transition-transform" src="/src/assets/copy-icon.svg" alt="copy-icon" />
                        </span>
                      </div>
                    </td>

                    <td className="px-4 py-4">
                      <div className="flex gap-2 items-center">
                        <span className="truncate">
                          {visiblePasswordIndex === index ? login.password : "•".repeat(login.password.length)}
                        </span>
                        <span>
                          <img onClick={() => copyToClipboard(login.password)} className="w-4 hover:cursor-pointer active:scale-85 transition-transform" src="/src/assets/copy-icon.svg" alt="copy-icon" />
                        </span>
                      </div>
                    </td>

                    <td className="px-4 py-4 truncate flex gap-3 flex-wrap">
                      <button
                        onClick={
                          () => setVisiblePasswordIndex(visiblePasswordIndex === index ? null : index)
                        }
                        className="py-1 px-2 rounded-lg font-medium bg-[#e1effb] hover:cursor-pointer flex gap-1 w-full lg:w-18 items-center">
                        <img
                          className="w-4"
                          src={
                            visiblePasswordIndex === index
                              ? "/src/assets/eye-closed-icon.svg"
                              : "/src/assets/eye-open-icon.svg"
                          }
                          alt="eye-icon"
                        />{visiblePasswordIndex === index ? "Hide" : "View"}
                      </button>

                      <button onClick={() => handleEdit(login.id)}
                        className="py-1 px-2 rounded-lg font-medium bg-[#e7fce7] hover:cursor-pointer flex w-full lg:w-fit gap-1  items-center">
                        <img className="w-4" src="/src/assets/edit-icon.svg" alt="edit-icon.svg" />Edit
                      </button>

                      <button
                        onClick={() => {
                          setDeletePopup(true)
                          setSelectedId(login.id);
                        }}
                        className="py-1 px-2 rounded-lg font-medium bg-[#fde2e2] hover:cursor-pointer w-20 lg:w-fit flex gap-1  items-center">

                        <img className="w-4" src="/src/assets/trash-bin-icon.svg" alt="trash-bin-icon" />Delete
                      </button>
                    </td>
                  </tr>
                ))
              )}

          </tbody>
        </table>
      </div >

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center" >
          <div className="fixed inset-0 bg-black/40" onClick={() => setIsOpen(false)} />
          <div className="bg-white z-90 p-5 rounded-2xl w-[95%] md:w-135">
            <div className="flex justify-between">
              <h1 className="text-2xl font-bold">Add New Login</h1>
              <img onClick={() => { setIsOpen(false) }} className="w-5 hover:cursor-pointer" src="/src/assets/close-icon.svg" alt="close-icon" />
            </div>
            <div className="flex flex-col gap-10 shadow-[0px_0px_5px_0px_rgba(0,0,0,0.2)] p-5 rounded-lg my-4">
              <div className="flex flex-col gap-1">
                <h3 className="text-xs font-semibold text-slate-500 uppercase">Website</h3>
                <input value={formData.website} onChange={(e) => { setFormData({ ...formData, website: e.target.value }) }} className="p-2 border rounded-md border-black/20 w-full font-medium placeholder-slate-500" type="text" placeholder="Netflix.com" />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-1">
                  <h3 className="text-xs font-semibold text-slate-500 uppercase">Username</h3>
                  <input value={formData.username} onChange={(e) => { setFormData({ ...formData, username: e.target.value }) }} className="p-2 border rounded-md border-black/20 w-full font-medium placeholder-slate-500" type="text" placeholder="Username" />
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="text-xs font-semibold text-slate-500 uppercase">Password</h3>
                  <input value={formData.password} onChange={(e) => { setFormData({ ...formData, password: e.target.value }) }} className="p-2 border rounded-md border-black/20 w-full font-medium placeholder-slate-500" required aria-required="true" type="text" placeholder="•••••••••" />
                </div>
              </div>

              <div className="flex flex-col gap-1 rounded-lg">
                <h3 className="text-xs font-semibold text-slate-500 uppercase">Email</h3>
                <input value={formData.email} onChange={(e) => { setFormData({ ...formData, email: e.target.value }) }} className="p-2 border rounded-md border-black/20 w-full font-medium placeholder-slate-500" type="email" placeholder="hello@example.com" />
              </div>
            </div>

            <div className="flex justify-between gap-5">
              <button onClick={() => { setIsOpen(false) }} className="py-3 px-5 font-bold rounded-lg hover:cursor-pointer ">Cancel</button>
              <button onClick={handleSave} className="bg-slate-950 py-3 px-5 font-bold text-white rounded-lg hover:cursor-pointer">Save</button>
            </div>
          </div>
        </div>
      )
      }

      {deletePopup && (
        <div className="fixed inset-0 z-51 flex items-center justify-center">
          <div onClick={() => { setDeletePopup(false) }} className="fixed inset-0 bg-black/40" />
          <div className="bg-white z-91 px-10 py-8 flex flex-col gap-6 rounded-lg text-slate-600 font-medium">
            <h1>Are you sure you want to Delete?</h1>
            <div className="flex justify-between">
              <button onClick={() => { setDeletePopup(false) }} className="px-4 py-2 text-slate-950 font-bold hover:cursor-pointer">Cancle</button>
              <button onClick={() => { handleDeleteLogin(selectedId) }} className="px-4 py-2 bg-slate-950 font-bold text-white hover:cursor-pointer rounded-lg">Delete</button>
            </div>

          </div>

        </div>
      )}

    </>
  )
}

export default Dashboard