import banner from '../assets/banner.png'
export default function Home()
{
    return(
        <>
        <h1 className="bg-green-500 text-red-500">Welcome to Our Site</h1>
        <img src={banner}/>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa velit blanditiis expedita fugiat quo et deserunt repudiandae, ipsam iure nisi sapiente quod sit excepturi praesentium cum deleniti? Accusamus, asperiores pariatur.</p>
        </>
    )
}