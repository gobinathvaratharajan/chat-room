import { createSlice } from '@reduxjs/toolkit';
import { AppEvent } from '../../app/types/event';
import { sampleData } from '../../app/api/sampleData';

type State = {
    events: AppEvent[];
};

const initialState: State = {
    events: sampleData,
};

export const eventSlice = createSlice({
    name: 'event',
    initialState,
    reducers: {
        createEvent: (state, action) => {
            state.events.push(action.payload);
        },
        updateEvent: (state, action) => {
            const index = state.events.findIndex(event => event.id === action.payload.id);
            state.events[index] = action.payload;
        },
        deleteEvent: (state, action) => {
            const index = state.events.findIndex(event => event.id === action.payload);
            state.events.splice(index, 1);
        },
    },
});

export const { createEvent, updateEvent, deleteEvent } = eventSlice.actions;
