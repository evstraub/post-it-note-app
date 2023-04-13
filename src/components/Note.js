import {MdDeleteForever} from 'react-icons/md'
const Note = () => {
  return (
    <div className='note'>
<span> Hello first note</span>
<div className='note-footer'>
    <small>04/13/2023</small>
    <MdDeleteForever className='delete-icon' size='1.3em'/>
</div>

    </div>
  )
}

export default Note