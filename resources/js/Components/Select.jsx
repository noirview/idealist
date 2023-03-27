import {useState} from "react";

export default function Select({name, label, options, onChange}) {
    const [value, setValue] = useState();

    const [placeholder, setPlaceholder] = useState(label);
    const [showOptions, setShowOptions] = useState(false);

    const onBtnClickHandler = (e) => setShowOptions(prevState => !prevState);

    const onLiClickHandler = (e) => {
        setShowOptions(prevState => !prevState)
        setPlaceholder(e.target.textContent);
        setValue(e.target.getAttribute("data-value"));
        onChange({
            key: name,
            value: parseInt(e.target.getAttribute("data-value")),
        })
    }

    const btnClassNames = (showOptions) => {
        let classes = ['btn', 'select__btn', 'add-new__select-btn'];

        showOptions && classes.push('active');

        return classes.join(' ');
    }

    return (
        <div className="select add-new__select">
            <button className={btnClassNames(showOptions)} onClick={onBtnClickHandler} type="button">
                <span>{placeholder}</span>
                <svg>
                    <use xlinkHref="./img/sprite.svg#drop"></use>
                </svg>
            </button>
            {showOptions &&
                <ul className="select__list add-new__select-list">
                    {options && options.map((option) =>
                        <li
                            key={option.value}
                            className="select__item add-new__select-item"
                            data-value={option.value}
                            onClick={onLiClickHandler}
                        >{option.label}</li>
                    )}
                </ul>
            }
        </div>
    )
}
