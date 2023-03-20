export default function Index({categories}) {
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
                                <a href="./add-new-category.html" className="btn btn__main">Добавить категорию</a>
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
                                <li className="page-header__nav-item active"><a href="./ideas.html">Категории идей</a>
                                </li>
                                <li className="page-header__nav-item"><a href="./ideas-list.html">Список идей</a></li>
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
                                <td>#</td>
                                <td>Название</td>
                                <td>Описание</td>
                                <td>Кол-во идей</td>
                                <td>Кол-во лайков</td>
                                <td>Статус</td>
                                <td>Действие</td>
                            </tr>
                            </thead>
                            <tbody>
                            {categories && categories.map((category) =>
                                <tr key={category.id}>
                                    <td>{category.id}</td>
                                    <td>{category.title}</td>
                                    <td>{category.description}</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>Включена</td>
                                    <td>
                                        <div>
                                            <a href="#">
                                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M2 1H13M13 1V12M13 1L1 13" stroke="black" strokeWidth="2"/>
                                                    <rect x="13" width="1" height="1" fill="black"/>
                                                </svg>
                                            </a>
                                            <a href="#">
                                                <svg width="15" height="15" viewBox="0 0 15 15" fill="none"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <path fillRule="evenodd" clipRule="evenodd"
                                                          d="M5.83574 7.24995L0.292847 1.70706L1.70706 0.292847L7.24995 5.83574L12.7928 0.292847L14.2071 1.70706L8.66417 7.24995L14.2071 12.7928L12.7928 14.2071L7.24995 8.66417L1.70706 14.2071L0.292847 12.7928L5.83574 7.24995Z"
                                                          fill="black"/>
                                                </svg>

                                            </a>
                                        </div>
                                    </td>
                                </tr>
                            )}
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>

        </div>
    );
}
