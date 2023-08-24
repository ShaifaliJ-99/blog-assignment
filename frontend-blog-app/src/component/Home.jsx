import { Link } from "react-router-dom"
import Registration from "./registration"

export const Home = () =>{
    return <div>
      <div style={{backgroundColor: "#8EC5FC",
backgroundImage: "linear-gradient(60deg, #8EC2FC 0%, #E0C0FC 100%)"

,border:"0px solid black",display:"flex",alignItems:"center",padding:'0px 10px',justifyContent:"space-between"}}>
        <img src="https://media3.giphy.com/media/PsdlJAuma89PLKNo18/200w.webp?cid=ecf05e4775t4ryc7dpynwceage3x9ug6vfbnvbca78j39261&ep=v1_stickers_search&rid=200w.webp&ct=s" alt="" width={'10%'}/>
        <div style={{border:"0px solid black",width:"40%",display:"flex",alignItems:"center",justifyContent:"space-between"}}>

      <Link to="/register"><img src="https://media0.giphy.com/media/cXytzXMNWD7UhQUydT/200w.webp?cid=ecf05e47o4easv80feyh78sk42mgtotqp6x8kiwclpbvmk2t&ep=v1_stickers_search&rid=200w.webp&ct=s" alt="" /></Link>
      <h3>Login</h3>
        </div>
      </div>
      <div style={{backgroundColor:"peach",border:"0px solid black",display:"flex",alignItems:"center",padding:'0px 10px',justifyContent:"space-around",margin:"4%"}}>

      <div  style={{border:"0px solid black",alignItems:"center",}}>
        <img src="https://media0.giphy.com/media/eivStASrUZ0gwKf1gN/giphy.webp?cid=ecf05e47t8g7qiny2v0docrrahc21bsvw6vjrcl0zebhic5w&ep=v1_stickers_search&rid=giphy.webp&ct=s" alt="" width={'50%'}/>
        <br />
        <h1 style={{marginBottom:"-60px"}}>TO BLOG APP</h1>
      <img src="https://media1.giphy.com/media/BIkqrhSdIh0stkwUTh/200w.webp?cid=ecf05e47w7o99cca1e3ge4hcj2lc7xxlhwqkq2suiq0e5416&ep=v1_stickers_search&rid=200w.webp&ct=s" alt="" />
      </div>
      <div>
        <img src="https://media4.giphy.com/media/8HBiwk4Zksv1b8X506/200w.webp?cid=ecf05e478ebpeqw3rv5fpn4yb7kwaf9mtrvujag1cqg6p3ol&ep=v1_stickers_search&rid=200w.webp&ct=s" alt="" width={'150%'}/>
      </div>
      </div>
    </div>
}