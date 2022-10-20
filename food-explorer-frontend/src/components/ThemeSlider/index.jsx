import { Container } from "./styles";

export function ThemeSlider({ theme, toggleTheme }) {
    
    return (
        <Container>
            <div className='toggle-switch'>
                <label>
                    <input id="sliderState" type='checkbox' checked={theme === 'darkTheme' ? false : true} onChange={toggleTheme}/>
                    <span className='slider'></span>
                </label>
            </div>
        </Container>
    );
}
