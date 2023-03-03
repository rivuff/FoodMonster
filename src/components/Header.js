const Title = ()=> (
    // <h2 id='title' key='h2'>Food Monster</h2>
    <a href='/'> 
        <img
        className='logo'
        alt='logo' 
        src='https://user-images.githubusercontent.com/74763144/222722640-82f61afa-22f0-4967-a9f9-226447a76ff5.png'/>
     </a>
)


const HeaderComponent = ()=>{
    return (
        <div className='header'>
        <Title/>
        <div className='nav-items'>
            <ul>
                <li>Home</li>
                <li>about</li>
                <li>contact us</li>
            </ul>
        </div>
        </div>
    );
};

export default HeaderComponent