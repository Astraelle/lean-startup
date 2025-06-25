export default function Footer(){
    return(
        <footer className="pt-20 h-100 grid grid-rows-[200px_5px_50px] w-full">
            <div className="grid xl:grid-cols-[1fr_200px_200px_200px] md:grid-cols-[1fr_100px_100px_100px] w-[90%] h-full m-auto">
                <div className="grid grid-rows-[75px_50px_30px] items-center">
                    <img src="Kollab_logo_nobaseline.png" alt="" className="xl:w-50 md:w-30"/>
                    <div className="grid xl:grid-cols-[300px_1fr] md:grid-cols-[200px_1fr]">
                        <input type="text" name="newsletter" id="newsletter" placeholder="Entrez votre email" className="border rounded-3xl pl-2 h-10 xl:w-full md:w-3/4"/>
                        <div className="">
                            <a href="/" className="xl:ml-10 grid items-center bg-black w-30 h-10 rounded-3xl text-center text-white">S'inscrire</a>
                        </div>
                    </div>
                    <p className="md:text-[12px] xl:text-[16px]">6000 indépendants qui n’ont plus le stress des actualités, et toi ?</p>
                </div>
                <div className="md:text-[12px] xl:text-[16px]">
                    <h4 className="font-bold">Kollab</h4>
                    <p>Tarifs</p>
                    <p>Contactez-nous</p>
                </div>
                <div className="md:text-[12px] xl:text-[16px]">
                    <h4 className="font-bold">Ressources</h4>
                    <p>Blog</p>
                    <p>FAQ</p>
                    <p>Témoignages</p>
                    <p>Newsletter</p>
                </div>
                <div className="md:text-[12px] xl:text-[16px]">
                    <h4 className="font-bold">Les petites lignes</h4>
                    <p>Mentions légales</p>
                    <p>Politique de confidentialité</p>
                    <p>politique de cookies</p>
                    <p>CGU</p>
                    <p>CGV</p>
                </div>
            </div>
            <span className="h-1 w-[90%] bg-[#1A1B191A] m-auto"></span>
            <div className="w-[90%] h-[50px] grid grid-cols-[300px_1fr_100px] items-center m-auto md:text-[12px] xl:text-[16px]">
                <p>© 2025 Kollab. Tous droits réservés.</p>
                <div></div>
                <div className="grid grid-cols-3 justify-items-center">
                    <img src="/tiktok.svg" alt="" />
                    <img src="/instagram.svg" alt="" />
                    <img src="/youtube.svg" alt="" />
                </div>
            </div>
        </footer>
    )
}