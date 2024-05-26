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
        <animated.div style={props}     onClick={() => onAddOrRemove(item)} className="p-4 border rounded-lg m-2 flex flex-col bg-purple-300 text-black  hover:bg-gray-200  items-center justify-between w-60">
            <h3 className="text-md ">{item.name}</h3>
            <p  className="text-lg mt-[20px] text-white bg-gray-800 p-2 rounded-3xl">₹{item.price}</p>
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