import React from 'react'

export default function SideBar() {
  return (
    <div className='w-2/5 max-w-md bg-slate-400'>
      <div
        key={'favorites'}
      >
        <div>
          <button
            type='button'
            className='inline-flex w-full justify-center gap-x-1.5 rounded-md px-3 py-2 text-sm font-semibold text-black shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50'
            id='fav-button'
            aria-expanded='true'
            aria-haspopup='true'
          >
            <svg
              className="-mr-1 h-5 w-5 text-gray-400"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true">
              <path fillRule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                clipRule="evenodd"
              />
            </svg>
            Favorites
          </button>
        </div>
      </div>
    </div>
  )
}