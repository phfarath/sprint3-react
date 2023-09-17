import {} from 'react'
// importando imagens 
import img1 from '../assets/pexels-akil-mazumder-1072824 (1).jpg'
import img2 from '../assets/pexels-andrea-piacquadio-1023397.jpg'
import img3 from '../assets/pexels-binyamin-mellish-169523 (1).jpg'
import img4 from '../assets/pexels-cottonbro-studio-4505166.jpg'
import img5 from '../assets//pexels-maggie-my-photo-album-1134062.jpg'
import img6 from '../assets/pexels-singkham-1108572.jpg'

import styles from '../css/Publicacoes.module.css'

function Publicacoes(){
    {}
    return(

       <section>
            <h2>Publicacoes</h2>

            <div className={styles.container}> <img src={img1} alt="publicação 1" className={styles.imagens}/>
            <img src={img2} alt="publicação 2" className={styles.imagens}/>
            <div> <img src={img3} alt="publicação 3" className={styles.imagens}/></div>
            <div> <img src={img4} alt="publicação 4" className={styles.imagens}/></div>
            <div> <img src={img5} alt="publicação 5" className={styles.imagens}/></div>
            <div> <img src={img6} alt="publicação 6" className={styles.imagens}/></div>
            </div>
        </section>
    );
}
export default Publicacoes;