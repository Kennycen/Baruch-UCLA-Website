import React from 'react'
import ImageCont from './ImageCont'
import './Team.css'

const Team = () => {
  return (
    <section className="team" id="team">
        <h1>Meet the Team</h1>
        <h2>E-board</h2>
        <div className="board-container">
            <ImageCont src='anthony.png' title='👨‍💼 President 👨‍💼' name='Anthony Zhang'/>
            <ImageCont src='michael.png' title='👔 Vice President 👔' name='Michael Jiang'/>
            <ImageCont src='jacky.png' title='💰 Treasurer 💰' name='Jacky Mei'/>
            <ImageCont src='jamie.png' title='📋 Secretary 📋' name='Jamie Wu'/>
        </div>
        <h2>Board</h2>
        <div className="board-container">
            <ImageCont src='jessie.png' title='🏞️ Graphics 🏞️' name='Jessie Tam'/>
            <ImageCont src='victoria.png' title='🏞️ Graphics 🏞️' name='Victoria Sung'/>
            <ImageCont src='tiffany.png' title='🏞️ Graphics 🏞️' name='Tiffany Lung'/>
            <ImageCont src='anna.png' title='🪪 Membership 🪪' name='Anna Deng'/>
            <ImageCont src='esha.png' title='🪪 Membership 🪪' name='Puspita Esha'/>
            <ImageCont src='kaylin.png' title='🫂 Philanthropy 🫂' name='Kaylin Zhou'/>
            <ImageCont src='bin.png' title='🫂 Philanthropy 🫂' name='Bin Lu'/>
            <ImageCont src='kenny.png' title='📹 Media Production 📹' name='Kenny Cen'/>
            <ImageCont src='iven.png' title='📹 Media Production 📹' name='Iven Yang'/>
            <ImageCont src='hinson.png' title='💸 Fundraising 💸' name='Hinson Dong'/>
            <ImageCont src='justin.png' title='💸 Fundraising 💸' name='Justin Liu'/>
            <ImageCont src='ivan.png' title='📊 Marketing 📊' name='Ivan Tan'/>
            <ImageCont src='mina.png' title='📊 Marketing 📊' name='Mina Chen'/>
            <ImageCont src='stuart.png' title='⛩️ CLP ⛩️' name='Stuart Xu'/>
            <ImageCont src='ming.png' title='⛩️ CLP ⛩️' name='Mingshuo Zhang'/>
            <ImageCont src='peiling.png' title='🖊️ Assist. Treasurer 🖊️' name='Peiling Luo'/>
            <ImageCont src='johnson.png' title='🖊️ Assist. Treasurer 🖊️' name='Johnson Guo'/>
            <ImageCont src='anson.png' title='🤝 Public Relations 🤝' name='Anson Wat'/>
            <ImageCont src='fiona.png' title='🎏 Events 🎏' name='Fiona Cheng'/>
            <ImageCont src='bryan.png' title='🎏 Events 🎏' name='Bryan Ang'/>
        </div>
    </section>
  )
}

export default Team