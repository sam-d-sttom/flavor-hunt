import { useEffect } from "react";

export default function usePreventBodyScrolling() {
    useEffect(() => {
        // Prevent scrolling when component renders
        document.body.classList.add('overflow-hidden');

        return () => {
            // Allow scrolling when component is removed
            document.body.classList.remove('overflow-hidden');
        };
    }, []);
}