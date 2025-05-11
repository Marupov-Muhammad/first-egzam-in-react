import image35 from '@/assets/IMAGE (35).png'
import image48 from '@/assets/IMAGE (48).png'
import vector from '@/assets/Vector (32).png'
import group from '@/assets/Group (16).png'
export function Header() {
    return <>
        <header>
            <nav>
                <div className='divAll'>
                    <div className='divFisrst'>
                        <img src={image35} alt="" />
                        <p>Home</p>
                        <p>About</p>
                        <p>Services</p>
                        <p>Pages</p>
                        <p>Contact</p>
                    </div>
                    <div className='divCrat'>
                        <p>Cart (0)</p>
                        <Button button={"Get a free quote"} />
                    </div>
                </div>
            </nav>
            <section className='sec1'>
                <div>
                    <h1 className='bigText'>Quality cleaning <br /> for your home</h1>
                    <p style={{ color: 'gray' }}>Condimentum mauris sit cursus amet id non neque pharetra <br /> nulla ornare sed facilisis senectus dapibus nibh ultrices eget <br /> suscipit aliquet et nulla magna lacus penatibus.</p>
                    <div className='flexbtn'>
                        <div>
                            <Button button={"Get a free quote"} />
                        </div>
                        <div className='felx'>
                            <div>
                                <Tel />
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <img style={{ width: '600px' }} src={group} alt="" />
                </div>
            </section>
        </header>
    </>
}

export function Button(props) {
    return <>
        <button className='button' style={props.style}>{props.button}</button>
    </>
}

export function Tel() {
    return <>
        <div style={{ display: 'flex', alignItems: "center", gap: '20px' }}>
            <div>
                <Image />
            </div>
            <div>
                <p style={{ color: 'gray' }}>Call us now</p>
                <h3>(414) 567 - 2109</h3>
            </div>
        </div>
    </>
}

export function Image() {
    return <>
        <img src={vector} alt="" />
    </>
}

export function Card(props) {
    return <>
        <div>
            <div className='tCenter'>
                <img src={props.image} alt="" />
                <strong style={{ color: '#211F54' }}>{props.name}</strong>
                <p style={{ color: 'gray' }}>Sagittis nibh scelerisque vitae egetolment vulputate sem elementum sed n.</p>
            </div>
        </div>
    </>
}

export function Clients(props) {
    return <>
        <div className='flexbox'>
            <div>
                <img src={props.images} alt="" />
            </div>
            <div>
                <p style={{ color: 'gray' }}>{props.name}</p>
                <h1 style={{ color: '#211F54' }}>{props.price}</h1>
            </div>
        </div>
    </>
}


export function True(props) {
    return <>
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <div>
                <img src={image48} alt="" />
            </div>
            <div>
                <p>{props.name}</p>
            </div>
        </div>
    </>
}

export function Number(props) {
    return <>
        <div>
            <div>
                <h1 style={{ color: '#211F54' }}>{props.num}</h1>
                <p style={{ color: 'gray' }}>{props.year}</p>
            </div>
        </div>
    </>
}


export function Icon(props) {
    return <>
        <div>
            <div>
                <img src={props.image} alt="" /> <br />
                <div style={{width: '300px', marginTop: '50px', margin: 'auto'}}>
                    <strong>{props.title}</strong>
                    <p>{props.description}</p>
                    <strong>{props.month}</strong>
                </div>
            </div>
        </div>
    </>
}



