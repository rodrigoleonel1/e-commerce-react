import './ErrorPage.scss';

const ErrorPage = () =>{
    return(
        <section className='ErrorContainer'>
            <div>
                <h1>ERROR 404</h1>
				<h2>¡Ups! Página no encontrada</h2>
				<p>La página que estás buscando no existe. Quizás escribiste mal la dirección o la página fue eliminada.</p>
            </div>
        </section>
    )
}

export default ErrorPage