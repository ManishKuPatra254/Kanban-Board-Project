import {Fragment,useState} from 'react';
import style from './MiddleAddSection.module.css';
import { CgClose } from 'react-icons/cg';
import { BiDotsHorizontalRounded } from 'react-icons/bi';
import { GrFormAdd } from 'react-icons/gr';
import { addList } from '../../Store/Slice';
import { addCard } from '../../Store/Slice2';
import { useSelector,useDispatch } from 'react-redux';

export function Addsection (){

  const[card,setCard]=useState("");
  const[input,setInput]=useState("");
  const[displayCard,setDisplayCard]=useState(false);
  const[nowClick,setNowClick]=useState(false);

  const dispatch=useDispatch();
  const {List} = useSelector((state)=> state.listSlice);
  const {Card} = useSelector((state)=>state.listCard);

  const handleAdd = () =>{
    dispatch(addList(input));
    setInput('');
  }

  const handleAddcard = () =>{
    dispatch(addCard(card));
    setCard('');
  }

  const handleSubmitClick = (e) =>{
    if(e.keyCode===13){
      dispatch(addCard(card));
      setCard('');
    }
  }

  const handleSubmit = (e) =>{
    if(e.keyCode===13){
      dispatch(addList(input));
      setCard('');
    }
  }

  return(
    <Fragment>
      <div className={style.Main_section}>
        { List.map((title) => <div className={style.map_container} key={title}>
          <div className={style.title_name}>
            <span>{title}</span>
            <span className={style.more_button}><BiDotsHorizontalRounded/></span>
          </div>
          {
            Card.map((card) => <div className={style.card_name}>{card}</div>)
          }
          {
            !displayCard ?
            <button className={style.card_button} onClick={()=>{setDisplayCard(!displayCard)}}>
              <GrFormAdd className={style.addIcon}/>
              Add a card
              </button>:
              <div className={style.card_container}>
                <input className={style.input_card}
                placeholder='Enter a title for this card...' value={card}
                onChange={(e)=> setCard(e.target.value)} onKeyDown={handleSubmitClick}
                autoFocus/>

                <div className={style.button_container}>
                  <button className={style.button} onClick={handleAddcard}>Add card</button>
                  <CgClose className={style.close_button} onClick={() => {setDisplayCard(!displayCard)}}/>
                </div>
              </div>
          }
        </div>)
        }
        {
          !nowClick ?
          <button className={style.list_button} onClick={()=>{setNowClick(!nowClick)}}>+ Add another list</button>:
          <div className={style.input_section}>
            <input className={style.input_task} type='text' placeholder='Enter list title...'
            value={input} onChange={(e)=>setInput(e.target.value)} onKeyDown={handleSubmit}
            autoFocus/>
            <div className={style.button_container}>
              <button className={style.button} onClick={handleAdd}>Add list</button>
              <CgClose className={style.close_button} onClick={() => {setNowClick(!nowClick)}}/>
            </div>
          </div>
        }
      </div>
    </Fragment>
  )
}