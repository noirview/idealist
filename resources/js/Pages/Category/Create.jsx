import {useForm} from "@inertiajs/react";

export default function Create() {
    const {post, setData} = useForm();

    const submitHandler = (e) => {
        e.preventDefault()
        post(route('admin.categories.store'));
    }

    const changeHandler = (e) => {
        setData(values => ({
            ...values,
            [e.target.name]: e.target.value,
        }))
    }

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

                <form className="add-new" onSubmit={submitHandler}>
                    <div className="add-new__header">
                        <div className="_container">
                            <div className="add-new__header-body">
                                <h2 className="add-new__title">Добавление категории</h2>
                                <div className="add-new__actions">
                                    <a href="./ideas.html" className="btn add-new__btn add-new__cancel">Отменить</a>
                                    <button type="submit"
                                            className="btn btn__main add-new__btn add-new__save">Создать
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="add-new__body">
                        <div className="_container">
                            <div className="add-new__form">
                                <div className="add-new__form-group">
                                    <input type="text" onChange={changeHandler} name="title" className="add-new__form-control form-control"
                                           placeholder="Название"/>
                                </div>
                                <div className="add-new__form-group">
                                    <textarea name="description" onChange={changeHandler} className="add-new__form-control form-control textarea"
                                              id=""
                                              placeholder="Описание"></textarea>
                                </div>
                                <div className="add-new__form-group">
                                    <label className="add-new__drop-zone drop-zone">
                                        <input type="file" onChange={changeHandler} name="file" id="file" className="drop-zone__input"
                                               accept=".png, .jpg, .jpeg" hidden/>
                                        <p>Перетащите фото сюда или <span>выберите файл</span></p>
                                        <div className="btn btn__drop">Загрузить</div>
                                    </label>
                                    <div className="drop-zone__thumb">
                                        <a className="drop-zone__zoom" data-fancybox="dropfile">
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
                                </div>

                            </div>
                        </div>
                    </div>
                </form>

                <div className="add-new__btns">
                    <a href="./ideas.html" className="btn add-new__btn add-new__cancel">Отменить</a>
                    <a href="./ideas.html" className="btn btn__main add-new__btn add-new__save">Сохранить</a>
                </div>

            </div>

        </div>
    );
}
