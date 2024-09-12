import React from 'react'
import ImageCont from './ImageCont'
import './Team.css'

const Team = () => {
  return (
    <section className="team" id="team">
        <h1>Meet the Team</h1>
        <h2>E-board</h2>
        <div className="board-container">
            <ImageCont src='nap5.jpg' title='👨‍💼 President 👨‍💼' name='Anthony Zhang'/>
            <ImageCont src='nap5.jpg' title='👔 Vice President 👔' name='Michael Jiang'/>
            <ImageCont src='nap5.jpg' title='💰 Treasurer 💰' name='Jacky Mei'/>
            <ImageCont src='nap5.jpg' title='📋 Secretary 📋' name='Jamie Wu'/>
        </div>
        <h2>Board</h2>
        <div className="board-container">
            <ImageCont src='nap5.jpg' title='🏞️ Graphics 🏞️' name='Jessie Tam'/>
            <ImageCont src='nap5.jpg' title='🏞️ Graphics 🏞️' name='Victoria Sung'/>
            <ImageCont src='nap5.jpg' title='🏞️ Graphics 🏞️' name='Tiffany Lung'/>
            <ImageCont src='anna.png' title='🪪 Membership 🪪' name='Anna Deng'/>
            <ImageCont src='esha.png' title='🪪 Membership 🪪' name='Puspita Esha'/>
            <ImageCont src='kaylin.png' title='🫂 Philanthropy 🫂' name='Kaylin Zhou'/>
            <ImageCont src='bin.png' title='🫂 Philanthropy 🫂' name='Bin Lu'/>
            <ImageCont src='nap5.jpg' title='📹 Media Production 📹' name='Kenny Cen'/>
            <ImageCont src='nap5.jpg' title='📹 Media Production 📹' name='Iven Yang'/>
            <ImageCont src='hinson.png' title='💸 Fundraising 💸' name='Hinson Dong'/>
            <ImageCont src='justin.png' title='💸 Fundraising 💸' name='Justin Liu'/>
            <ImageCont src='ivan.png' title='📊 Marketing 📊' name='Ivan Tan'/>
            <ImageCont src='mina.png' title='📊 Marketing 📊' name='Mina Chen'/>
            <ImageCont src='stuart.png' title='⛩️ CLP ⛩️' name='Stuart Xu'/>
            <ImageCont src='ming.png' title='⛩️ CLP ⛩️' name='Mingshuo Zhang'/>
            <ImageCont src='peiling.png' title='🖊️ Assist. Treasurer 🖊️' name='Peiling Luo'/>
            <ImageCont src='johnson.png' title='🖊️ Assist. Treasurer 🖊️' name='Johnson Guo'/>
            <ImageCont src='nap5.jpg' title='🤝 Public Relations 🤝' name='Anson Wat'/>
            <ImageCont src='fiona.png' title='🎏 Events 🎏' name='Fiona Cheng'/>
            <ImageCont src='bryan.png' title='🎏 Events 🎏' name='Bryan Ang'/>
        </div>
    </section>
  )
}

export default Team