
export function Button(props) {
    console.log(props)

    let _class = 'glass btn btn-primary btn rounded-full btn btn-lg btn-outline'
    if (props.variant === "secondary") { _class = "btn btn-lg btn-outline btn-secondary"; }
    else if (props.variant === "primary") {
        _class = "btn btn-lg btn-outline btn-primary";
    }
    return (
        <button className={_class} type="button">
            {props.children}
        </button>
    )
}