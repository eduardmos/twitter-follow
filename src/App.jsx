import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

export function App() {
    return (
        <section className='App'>
            <TwitterFollowCard userName="juanjo" name="juan jose valverde" />
            <TwitterFollowCard userName="maria" name="maria pineda" />
            <TwitterFollowCard userName="daniel" name="daniel fernando ramirez" />
            <TwitterFollowCard userName="david" name="david rayo" />
        </section>

    )
}
