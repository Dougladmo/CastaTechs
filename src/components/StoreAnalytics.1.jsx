import AnaliseImg from '../assets/analiseImg.webp'



export const StoreAnalytics = () => {
    return (
        <div id='wrapper' className='lg:flex'>
            <p className='text-white text-base self-start lg:pt-8 lg:pr-5'>Analise o que acontece dentro da sua loja e planeje as decisões corretas com base nas informações  e dados dos indicadores, esteja sempre atualizado.</p>
            <img className='w-full py-5 rounded-xl md:w-2/3 md:m-auto' src={AnaliseImg} alt="imagens de grafico" />
            <p className='text-white text-right text-base pt-3 self-end lg:pb-8 lg:pl-5'>Integração com o Google Analytics
                Mais métricas para seguir crescendo
                Realize a segmentação das suas campanhas</p>
        </div>
    );
};
