module HelloWorld exposing (..)


helloWorld : Maybe String -> String
helloWorld name =
    let
        printName =
            case name of
                Just n ->
                    n

                Nothing ->
                    "World"
    in
        "Hello, " ++ printName ++ "!"
