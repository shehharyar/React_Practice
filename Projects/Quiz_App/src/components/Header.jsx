import LOGO from '../assets/quiz-logo.png';

export default function Header(){
    return(
        <header>
            <img src={LOGO} alt="Quiz Logo" />
            <h1>Quiz Game</h1>
        </header>
    )
}