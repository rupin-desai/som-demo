import { Variants, Transition } from 'framer-motion';

// Bouncy Spring Transition using translate3d for GPU acceleration
export const springTransition: Transition = {
    type: "spring",
    damping: 20,
    stiffness: 100,
    mass: 0.5
};

// Reusable Variants
export const fadeInUp: Variants = {
    hidden: { 
        opacity: 0, 
        transform: "translate3d(0, 40px, 0)" 
    },
    visible: { 
        opacity: 1, 
        transform: "translate3d(0, 0, 0)",
        transition: springTransition
    }
};

export const fadeInLeft: Variants = {
    hidden: { 
        opacity: 0, 
        transform: "translate3d(-40px, 0, 0)" 
    },
    visible: { 
        opacity: 1, 
        transform: "translate3d(0, 0, 0)",
        transition: springTransition
    }
};

export const fadeInRight: Variants = {
    hidden: { 
        opacity: 0, 
        transform: "translate3d(40px, 0, 0)" 
    },
    visible: { 
        opacity: 1, 
        transform: "translate3d(0, 0, 0)",
        transition: springTransition
    }
};



// Stagger Container for children animations
export const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.1
        }
    }
};

// Word Stagger
export const wordStagger: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.1
        }
    }
};

export const wordAnimation: Variants = {
    hidden: { 
        opacity: 0, 
        transform: "translate3d(0, 30px, 0)"
    },
    visible: { 
        opacity: 1, 
        transform: "translate3d(0, 0, 0)",
        transition: {
            type: "spring",
            damping: 15,
            stiffness: 100
        }
    }
};
