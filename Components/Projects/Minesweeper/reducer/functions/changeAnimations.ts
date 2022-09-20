import { Action, State } from "..";


export const changeAnimations = (state: State, action: Action): State => {
    if (action.type !== 'ChangeAnimations') return state
    
    if(action.animationOption === "All") {
        const allSetToTrue = !Array.from(state.customAnimations.values()).includes(false)

        Array.from(state.customAnimations.keys()).forEach(animationKey => {
            state.customAnimations.set(animationKey, !allSetToTrue)
        })
    } else {
        state.customAnimations.set(action.animationOption, !state.customAnimations.get(action.animationOption))
    }

    return {
        ...state
    }
}