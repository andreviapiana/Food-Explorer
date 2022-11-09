import { createContext, useContext, useState, useEffect } from 'react';

export const FavoritesContext = createContext({});

function FavoritesProvider({ children }) {
    const [favorites, setFavorites] = useState(JSON.parse(localStorage.getItem(`@foodexplorer:favorites`)) || []);

    function addDishToFavorite(data) {
        setFavorites([...favorites, data])
    }

    function removeDishFromFavorite(data) {
        setFavorites(favorites.filter((dish) => dish.id !== data.id))
    }

    useEffect(() => {
        localStorage.setItem(`@foodexplorer:favorites`, JSON.stringify(favorites));
    }, [favorites])

    return (
        <FavoritesContext.Provider value={{ 
            favorites,
            addDishToFavorite,
            removeDishFromFavorite,
        }}>
            {children}
        </FavoritesContext.Provider>
    )
}

function useFavorites() {
    const context = useContext(FavoritesContext);
    return context;
}

export { FavoritesProvider, useFavorites };