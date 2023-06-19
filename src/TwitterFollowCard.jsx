
import { useState } from 'react' // esto es un hooks en react y son la vida 

export function TwitterFollowCard({ userName, name }) {

    const [isFollowing, setIsFollowing] = useState(false)
    const text = isFollowing ? 'Siguiendo' : 'Seguir' //esto es un ternario es como un if chiquito//

    const buttonClassName = isFollowing
        ? 'tw-followCard-button is-following'
        : 'tw-followCard-button'

    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }

    return (
        <article className='tw-followCard' >
            <header className='tw-followCard-header'>
                <img
                    className='tw-followCard-avatar'
                    alt="EL AVATAR DE USUARIO"
                    src={`https://unavatar.io/${userName}`} />

                <div className='tw-followCard-info'>
                    <strong>{name}</strong>
                    <span ClassName="tw-followCard-infoUserName">@{userName}</span>
                </div>
            </header>

            <aside>
                <button className={buttonClassName} onClick={handleClick}>
                    <span className="tw-followCard-text">{text}</span>
                    <span className='tw-followCard-stopFollow'>Dejar de seguir</span>
                </button>
            </aside>
        </article>
    )
}