import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define the type for your organization object
interface Organization {
  organisationId: number;
  organisationName: string;
  userRole: string;
  // Add other properties as needed
}

// Define the initial state type
interface OrganisationsState {
  organisations: Organization[];
}

const initialState: OrganisationsState = {
  organisations: [],
};

export const dashBoardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    setOrganisation: (state, action: PayloadAction<Organization[]>) => {
      state.organisations = action.payload;
    },
    addOrganisation: (state, action: PayloadAction<Organization>) => {
      state.organisations.push(action.payload);
    },
  },
});

export const { setOrganisation, addOrganisation } = dashBoardSlice.actions;

export default dashBoardSlice.reducer;
