import Select from "@/Components/Select";
import {useForm} from "@inertiajs/react";

export default function Create({categories, statuses}) {
    const {post, setData} = useForm();

    const submitHandler = (e) => {
        e.preventDefault()
        post(route('admin.ideas.store'));
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
                                <li className="page-header__nav-item"><a href="./ideas.html">Категории идей</a></li>
                                <li className="page-header__nav-item active"><a href="./ideas-list.html">Список идей</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <form className="add-new" onSubmit={submitHandler}>
                    <div className="add-new__header">
                        <div className="_container">
                            <div className="add-new__header-body">
                                <h2 className="add-new__title">Добавление идеи</h2>
                                <div className="add-new__actions">
                                    <a href="./ideas-list.html"
                                       className="btn add-new__btn add-new__cancel">Отменить</a>
                                    <button
                                        type="submit"
                                        className="btn btn__main add-new__btn add-new__save"
                                    >Создать
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="add-new__body">
                        <div className="_container">
                            <div className="add-new__form">
                                <div className="add-new__form-group">
                                    <Select
                                        name="category_id"
                                        label='Категория'
                                        options={categories}
                                        onChange={(data) => setData((values) => ({
                                            ...values,
                                            [data.key]: data.value,
                                        }))}
                                    />
                                </div>
                                <div className="add-new__form-group">
                                    <input
                                        name="author_name"
                                        type="text"
                                        className="add-new__form-control form-control"
                                        placeholder="Имя создателя"
                                        onChange={changeHandler}
                                    />
                                </div>
                                <div className="add-new__form-group">
                                    <input
                                        name="title"
                                        type="text"
                                        className="add-new__form-control form-control"
                                        placeholder="Тема"
                                        onChange={changeHandler}
                                    />
                                </div>
                                <div className="add-new__form-group">
                                    <input
                                        name="description"
                                        type="text"
                                        className="add-new__form-control form-control"
                                        placeholder="Описание"
                                        onChange={changeHandler}
                                    />
                                </div>
                                <div className="add-new__form-group">
                                    <div className="add-new__row">
                                        <div className="add-new__col col-sm-6">
                                            <Select
                                                name="status"
                                                label={'Статус'}
                                                options={statuses}
                                                onChange={(data) => {
                                                    setData((values) => ({
                                                        ...values,
                                                        [data.key]: data.value,
                                                    }))
                                                }}
                                            />
                                        </div>
                                        <div className="add-new__col col-sm-6">
                                            <label className="add-new__file w-100 h-100">
                                                <input type="file" name="file" id="file" accept=".png, .jpg, .jpeg"
                                                       hidden/>
                                                <div className="btn btn__drop w-100 h-100">Прикрепить файл</div>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>

                <div className="add-new__btns">
                    <a href="./ideas-list.html" className="btn add-new__btn add-new__cancel">Отменить</a>
                    <a href="./ideas-list.html" className="btn btn__main add-new__btn add-new__save">Сохранить</a>
                </div>

            </div>

        </div>
    );
}
