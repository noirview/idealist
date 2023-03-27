export default function Index({ideas}) {
    return (
        <div id="container">

            <nav className="header-nav">
                <div className="header-nav__logo"><a href="./">Список идей</a></div>
                <div className="header-nav__body">
                    <ul className="header-nav__menu">
                        <li className="header-nav__list active">
                            <a href="./ideas.html">
                                <svg>
                                    <use xlinkHref="./img/nav.svg#list"></use>
                                </svg>
                                Список идей
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>

            <header className="header" id="header">
                <div className="header__body">
                    <div className="bars">
                        <svg>
                            <use xlinkHref="./img/sprite.svg#bars"></use>
                        </svg>
                    </div>
                    <div className="header__logo"><a href="./"><img src="./img/logo.svg" alt=""/></a></div>
                    <div className="header__actions">
                        <a href="#" className="header__action header__action-search">
                            <svg>
                                <use xlinkHref="./img/sprite.svg#search-mob"></use>
                            </svg>
                        </a>
                        <a href="#" className="header__action header__action-mess">
                            <svg>
                                <use xlinkHref="./img/sprite.svg#mess"></use>
                            </svg>
                        </a>
                    </div>
                </div>
            </header>

            <div id="content">
                <div className="page-header">
                    <div className="_container">
                        <div className="page-header__body">
                            <h1 className="page-header__title">Список идей</h1>
                            <div className="page-header__actions">
                                <a href="./add-new-idea.html" className="btn btn__main">Добавить идею</a>
                                <div className="page-header__list">
                                    <div className="page-header__lang">
                                        RU
                                        <svg>
                                            <use xlinkHref="./img/sprite.svg#drop"></use>
                                        </svg>
                                        <ul className="page-header__lang-list">
                                            <li><a href="#">eng</a></li>
                                            <li className="active"><a href="#">ru</a></li>
                                        </ul>
                                    </div>
                                    <a href="./search.html" className="page-header__search">
                                        <svg>
                                            <use xlinkHref="./img/sprite.svg#search"></use>
                                        </svg>
                                    </a>
                                    <a href="./mess.html" className="page-header__mess">
                                        <svg>
                                            <use xlinkHref="./img/sprite.svg#messpc"></use>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                            <ul className="page-header__nav">
                                <li className="page-header__nav-item"><a href="#">Инструкция</a></li>
                                <li className="page-header__nav-item"><a href="./ideas.html">Категории идей</a></li>
                                <li className="page-header__nav-item active"><a href="./ideas-list.html">Список идей</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="filter">
                    <div className="_container">
                        <div className="filter__body">
                            <div className="filter-drops">
                                <div className="select filter-select">
                                    <button className="btn select__btn filter-select__btn">
                                        <span>Статус</span>
                                        <svg>
                                            <use xlinkHref="./img/sprite.svg#drop"></use>
                                        </svg>
                                    </button>
                                    <ul className="select__list filter-select__list">
                                        <li className="select__item filter-select__item">Статус 1</li>
                                        <li className="select__item filter-select__item">Статус 2</li>
                                        <li className="select__item filter-select__item">Статус 3</li>
                                    </ul>
                                </div>
                                <div className="select filter-select">
                                    <button className="btn select__btn filter-select__btn">
                                        <span>Дата</span>
                                        <svg>
                                            <use xlinkHref="./img/sprite.svg#drop"></use>
                                        </svg>
                                    </button>
                                    <ul className="select__list filter-select__list">
                                        <li className="select__item filter-select__item">Дата 1</li>
                                        <li className="select__item filter-select__item">Дата 2</li>
                                        <li className="select__item filter-select__item">Дата 3</li>
                                    </ul>
                                </div>
                                <div className="select filter-select filter-select__search">
                                    <div className="filter-select__search-froup">
                                        <input type="text" className="filter-select__btn form-control"
                                               placeholder="Поиск..."/>
                                            <button className="btn filter-select__search-btn">
                                                <svg>
                                                    <use xlinkHref="./img/sprite.svg#search"></use>
                                                </svg>
                                            </button>
                                    </div>
                                </div>
                            </div>
                            <div className="filter-act">
                                <div className="select filter-select">
                                    <button className="btn select__btn filter-select__btn">
                                        <span>Сортировать по...</span>
                                        <svg>
                                            <use xlinkHref="./img/sprite.svg#drop"></use>
                                        </svg>
                                    </button>
                                    <ul className="select__list filter-select__list">
                                        <li className="select__item filter-select__item">По возрастанию</li>
                                        <li className="select__item filter-select__item">По убыванию</li>
                                        <li className="select__item filter-select__item">Цена</li>
                                        <li className="select__item filter-select__item">Доступно</li>
                                        <li className="select__item filter-select__item">Статус</li>
                                    </ul>
                                </div>
                                <div className="filter-actions">
                                    <button className="btn filter-reset">
                                        <svg>
                                            <use xlinkHref="./img/sprite.svg#close"></use>
                                        </svg>
                                        Сбросить
                                    </button>
                                    <button className="btn btn__main filter-submit">
                                        <svg>
                                            <use xlinkHref="./img/sprite.svg#check"></use>
                                        </svg>
                                        Применить
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="page-table">
                    <div className="table-responsive">
                        <table className="table with-action">
                            <thead>
                            <tr>
                                <td></td>
                                <td>Категория</td>
                                <td>Имя создателя</td>
                                <td>Дата создания</td>
                                <td>Тема</td>
                                <td>Кол-во лайков</td>
                                <td>Статус</td>
                                <td>Действие</td>
                            </tr>
                            </thead>
                            <tbody>
                            {ideas && ideas.map((idea) => <tr key={idea.id}>
                                <td>{idea.id}</td>
                                <td>{idea.category.title}</td>
                                <td>{idea.author_name}</td>
                                <td>{idea.created_at}</td>
                                <td>{idea.description}</td>
                                <td>0</td>
                                <td>{idea.status}</td>
                                <td>
                                    <div>
                                        <a href="#">
                                            <svg>
                                                <use xlinkHref="./img/sprite.svg#arrow"></use>
                                            </svg>
                                        </a>
                                        <a href="#">
                                            <svg>
                                                <use xlinkHref="./img/sprite.svg#close"></use>
                                            </svg>
                                        </a>
                                    </div>
                                </td>
                            </tr>)}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}
