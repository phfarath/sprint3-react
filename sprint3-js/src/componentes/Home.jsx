import {} from 'react';
import logo from '../assets/310f4dfe-6376-41dd-96bb-23ae9eb4743b-removebg-preview.png'
import img1 from '../assets/Multi-device targeting-pana (1).svg'
import img2 from '../assets/pexels-miguel-á-padriñán-3785930-removebg-preview.png'
import styles from '../css/Home.module.css'

function Home(){
    return(
        <>

       

        <h1>Quem somos?</h1>
                <h2>GreenLight é a mais nova rede social da GreenCorp, com direito a premiações e mais!</h2>
            <img src={logo} title="imagem" className={styles.logo}/>
                <br/>
                <div classname={styles.objetivos}><h2>Objetivos</h2>
                    <h5>• Tornar o mundo mais sustentável atraves do mais atual, as redes sociais.</h5>
                    <h5>• Transformar o modo com que as pessoas observam o mundo.</h5>
                    <h5>• Trabalhar o valor recebido pela nossa casa, o Planeta Terra.</h5>
                    <h5>• Além de buscar a felicidade e a diversão de todos os usuários.</h5>
                    <img src={img1} alt="objetivos" className={styles.img1}/>
                    </div>
                    <br/>
                    <div><h2>Como Funciona</h2>
                    <h5>• Funciona como qualquer rede social atual, porém com um diferecial: um ranking mensal.</h5>
                    <h5>• Baseando-se em estatisticas, como numero de seguidores, engajamento das publicações e
                        frequencia no aplicativo, você tera um ranking atualizado semanalmente.</h5>
                    <h5>• Com isso, quanto mais alto seu ranking maiores as chances de um prêmio melhor! Ex: cartões de
                        presente, planos de assinaturas e mais!</h5>
                        <img src={img2} alt="engrenagens" />
                        </div>
        </>
    );

}
export default Home;