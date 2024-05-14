import { useSpring, animated } from 'react-spring';

const AnimatedCard = ({ item, isSelected, onAddOrRemove }) => {
    // Animation configs
    const props = useSpring({
        to: { 
            opacity: isSelected ? 0 : 1,
            transform: isSelected ? 'translate(200px, 300px)' : 'translate(0px, 0px)' 
        },
        from: { opacity: 1, transform: 'translate(0px, 0px)' },
        reset: isSelected
    });
    return (
        <animated.div style={props}     onClick={() => onAddOrRemove(item)} className="p-4 border rounded-lg m-2 flex flex-col bg-purple-300 text-black hover:text-red-700 hover:bg-yellow-300 font-bold items-center justify-between w-60">
            <h3 className="text-md font-semibold">{item.name}</h3>
            <p  className="text-lg mt-[20px] text-red-500 bg-yellow-400 p-2 rounded-3xl">₹{item.price}</p>
            {/* <button
                className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-500 mt-2"
                onClick={() => onAddOrRemove(item)}
            >
                {isSelected ? 'Remove' : 'Select'}
            </button> */}
        </animated.div>
    );
};

export default AnimatedCard;