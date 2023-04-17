export default function Prompt({ addCommandToList, inputRef }: any) {

  const handleKeyDown = (event: any) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      addCommandToList(event.target.innerHTML);
      if (inputRef.current) {
        inputRef.current.innerHTML = '';
      }
    }
  }

  return (
    <div className='flex align-bottom'>
      <span>guest@santiascode-Portfolio ~ %</span>
      <p
        onKeyDown={handleKeyDown}
        className='inline ml-1 bg-transparent outline-none border-transparent focus:border-transparent focus:ring-0 break-all caret-transparent pointer-events-none cursor-default'
        ref={inputRef}
        contentEditable="true"
      >
      </p>
      <span className='animate-blink-fast text-transparent bg-cwhite'>h</span>
    </div>
  )
}
