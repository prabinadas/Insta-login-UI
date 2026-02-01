import React from 'react'

const Footer = () => {
  return (
    <div className='flex flex-col justify-between'>
 <footer className="mt-1 text-xs text-gray-400 text-center max-w-4xl px-4">
        <div className="flex flex-wrap justify-center gap-x-4 gap-y-2">
            <a href="#" className="hover:underline">Meta</a>
            <a href="#" className="hover:underline">About</a>
            <a href="#" className="hover:underline">Blog</a>
            <a href="#" className="hover:underline">Jobs</a>
            <a href="#" className="hover:underline">Help</a>
            <a href="#" className="hover:underline">API</a>
            <a href="#" className="hover:underline">Privacy</a>
            <a href="#" className="hover:underline">Terms</a>
            <a href="#" className="hover:underline">Locations</a>
            <a href="#" className="hover:underline">Instagram Lite</a>
            <a href="#" className="hover:underline">Threads</a>
            <a href="#" className="hover:underline">Contact uploading and non-users</a>
            <a href="#" className="hover:underline">Meta Verified</a>
          </div>
          <div className="text-xs text-gray-500">
            <span>English © 2024 Instagram from Meta</span>
          </div>
        </footer>
    </div>
  )
}

export default Footer
