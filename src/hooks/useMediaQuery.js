import { useEffect, useState } from "react";

function useMediaQuery(mediaQuery) {
    const [matches, setMatches] = useState(
        window.matchMedia(mediaQuery).matches
    );

    useEffect(() => {
        window
            .matchMedia(mediaQuery)
            .addEventListener('change', (event) => setMatches(event.matches));

        return window
            .matchMedia(mediaQuery)
            .removeEventListener('change', () => { })
    }, []);

    return matches;
}

export default useMediaQuery;