import { State } from "..";

export const applyAnimation = (state: State) => {
    const animationStep = state.animationToApply.dequeue()

    if(!animationStep) return;

    if(animationStep.animations === "WIPE") {
        state.board.forEach((row) => {
            row.forEach((cell) => {
              cell.color = undefined
            })
          })
    } else {
        animationStep.animations.forEach(animation => {
            state.board[animation.rowIndex][animation.columnIndex].color = animation.color 
        })
    }

    state.animationTime = animationStep.time
}