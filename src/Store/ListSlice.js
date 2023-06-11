import { createSlice } from "@reduxjs/toolkit";

const listSlice = createSlice({
    name: "listSlice",
    initialState: {
        list: []
    },
    reducers: {
        addList: (state, action) => {
            if (action.payload !== '') {
                state.list.push(action.payload)
                // console.log("action called",action)
            }
        },

        updateList: (state, action) => {
            const { oldData, inputList } = action.payload;
            const index = state.list.findIndex((item) =>
                item.id === oldData
            )

            console.log(index)
            if (index !== -1) {
                state.list[index].title = inputList
            }
        },


        addCard: (state, action) => {
            console.log("action", action, state.list);
            state.list.forEach((item) => {
                if (item.id === action.payload.parentId) {
                    if (Object.hasOwn(item, "children")) {
                        item.children.push(action.payload);
                    } else {
                        item.children = [];
                        item.children.push(action.payload)
                    }
                }
            })

        },

        updateCard: (state, action) => {
            const newUpdatedData = action.payload
            console.log(newUpdatedData);

            const tasks = state.list.map((item) => {
                if (item.id == newUpdatedData.parentId) {
                    const newUpdatedChildren = item.children.map(task => {
                        if (task.id == newUpdatedData.id) {
                            return newUpdatedData;
                        }
                        else {
                            return task;
                        }
                    })
                    return { ...item, children: newUpdatedChildren }
                }
                else {
                    return item;
                }
            });
            state.list = tasks;
        },
    },
})

export const { addList, addCard, updateList, updateCard } = listSlice.actions;
export default listSlice.reducer;



