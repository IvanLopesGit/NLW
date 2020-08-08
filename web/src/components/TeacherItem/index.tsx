import React from 'react'
import whatsappIcon from '../../assets/images/icons/whatsapp.svg'
import './style.css'

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://pbs.twimg.com/profile_images/1229896591353532421/34PJlnUy_400x400.jpg" alt="Ivan Lopes" />
                <div>
                    <strong>Ivan Lopes</strong>
                    <span>Programação</span>
                </div>
            </header>
            <p>Gosto de programar.
                        <br /><br />
                        Estou disposto a ensinar tudo para vocês.
                    </p>
            <footer>
                <p>
                    Preço/Hora
                            <strong>R$ 20,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="WhatsApp" />
                            Entrar em contato
                        </button>
            </footer>
        </article>
    )
}

export default TeacherItem