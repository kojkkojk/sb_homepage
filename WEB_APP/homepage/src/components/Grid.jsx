import React, { useState } from 'react'

function Grid() {
   const [teamList] = useState([
      { game: '스트리트파이터6', max: 4, now: 3, user: "마감막이" },
      { game: '철권8', max: 4, now: 2, user: "구을방울" },
      { game: '철권8', max: 5, now: 3, user: "수군통제사" },
      { game: '길티기어 Strive', max: 3, now: 3, user: "분점조" },
      { game: '철권8', max: 2, now: 2, user: "구그시라흐" },
      { game: '길티기어 Strive', max: 3, now: 1, user: "Antonio" },
      { game: '스트리트파이터6', max: 5, now: 1, user: "Kuno" },
      { game: '길티기어 Strive', max: 5, now: 4, user: "맨갈퀴지의" },
      { game: '철권8', max: 5, now: 2, user: "NOAH" },
      { game: '스트리트파이터6', max: 3, now: 1, user: "SUNN YOUN" },
      { game: '길티기어 Strive', max: 5, now: 4, user: "박준영" },
      { game: '스트리트파이터6', max: 6, now: 3, user: "undefined" },
   ])
   const imgs = {
      "스트리트파이터6": "https://firebasestorage.googleapis.com/v0/b/hknu-snowball.appspot.com/o/SF6.png?alt=media&token=29435d9d-e850-40da-9b2b-3fa5698a933a",
      "철권8": "https://firebasestorage.googleapis.com/v0/b/hknu-snowball.appspot.com/o/tekken8.png?alt=media&token=f84a2811-7441-42c7-a3e0-eee3414c9aa6",
      "길티기어 Strive": "https://firebasestorage.googleapis.com/v0/b/hknu-snowball.appspot.com/o/ggst.png?alt=media&token=e2c01542-ea68-4686-a1ff-0676b30871c4"
   }
   return (
      <div className='timaes'>
         <div className='grid_main'>
            <span style={{ "width": "100%", "fontSize": "40px", "letterSpacing": "0.3em", "textAlign": "center", "paddingBottom": "15px" }}>SNOWBALL.GG</span>
            <span style={{ "borderTop": "5px solid #fff", "width": "180px", "height": "45px" }}></span>
            <div style={{ "width": "100%", "textAlign": "center", "padding": "0 25px" }}>
               <a href="#!">대회 참가</a>
               <a href="#!">대회 생성</a>
            </div>
         </div>
         <div className='grid_contents'>
            {teamList.length < 0 ? "" :
               teamList.map((d, i) => (
                  <div className='card' key={i}>
                     <div className='imgbox'>
                        <img src={imgs[d.game]} alt="" srcset="" />
                     </div>
                     <div>
                        <p>{d.game}</p>
                        <p style={d.now / d.max >= 1 ? { "color": "red" } : {}}>{d.now} / {d.max}</p>
                        <p>{d.user}</p>
                     </div>
                  </div>
               ))
            }
         </div>
      </div>
   )
}

export default Grid