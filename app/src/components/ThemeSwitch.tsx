import Form from 'react-bootstrap/Form'
import { useState, useEffect } from 'react';
import "./ThemeSwitch.css"

export function ThemeSwitch() {
    const [on, setOn] = useState(window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches)

    function changeMode()  {
        setOn(!on)
    }

    useEffect(() => {
        const body = document.getElementById("body")
        if (on) {
            body?.setAttribute("data-bs-theme", "light")
            document.documentElement.style.setProperty("color-scheme", "light")
            document.documentElement.style.setProperty("--shadow-color", "ghostwhite")
        }
        else {
            body?.setAttribute("data-bs-theme", "dark")
            document.documentElement.style.setProperty("color-scheme", "dark")
            document.documentElement.style.setProperty("--shadow-color", "#1e1e1e")
        }
    });

    return(
      <Form>
        <Form.Switch
            id="light-dark-switch"
            onChange={changeMode}
            checked={on}
        />
      </Form>
    )
}
