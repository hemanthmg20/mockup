import './App.css';
import './RightContainer.css'
export default function RightContainer() {
    return(
        <div className='right'>
            <div className='rgt-container'>
                <h2>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora aliquid tenetur quia enim ad reprehenderit,</h2>
                <h6>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam at sed possimus iusto quas quo? | 2024 | <span>Randamized Controlled Trail</span> <span>High Impact</span>
                </h6>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique libero atque voluptas? Quae incidunt consequatur numquam sit quisquam praesentium distinctio?</p>

                <div style={{display:"flex", gap:"15px"}}>
                    <button>Full Text</button>
                    <button>Bookmark</button>
                    <button>Annotate</button>
                    <button>Cite</button>
                </div>

            </div>
            <div className='rgt-container'>
                <h2>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora aliquid tenetur quia enim ad reprehenderit,</h2>
                <h6>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam at sed possimus iusto quas quo? | 2024 | <span>Randamized Controlled Trail</span> <span>High Impact</span>
                </h6>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique libero atque voluptas? Quae incidunt consequatur numquam sit quisquam praesentium distinctio?</p>

                <div style={{display:"flex", gap:"15px"}}>
                    <button>Full Text</button>
                    <button>Bookmark</button>
                    <button>Annotate</button>
                    <button>Cite</button>
                </div>

            </div>
        </div>
    )
}