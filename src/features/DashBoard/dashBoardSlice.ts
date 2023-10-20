import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define the type for your organization object
interface Organization {
  organisationId: string;
  organisationName: string;
  userRole: string;
  // Add other properties as needed
}
interface SelectedOrganisation{
  organisationId: string;
  organisationName: string;
  userRole: string;
}
// Define the initial state type
interface OrganisationsState {
  organisations: Organization[];
  selectedOrganisation: SelectedOrganisation;
}

const initialState: OrganisationsState = {
  organisations: [],
  selectedOrganisation: {
    organisationId: "", // Initialize with appropriate values
    organisationName: "",
    userRole: ""
  }
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
    setSelectedOrg: (state, action: PayloadAction<SelectedOrganisation>) => {
      state.selectedOrganisation = action.payload;
    },
  },
});

export const { setOrganisation, addOrganisation, setSelectedOrg } = dashBoardSlice.actions;

export default dashBoardSlice.reducer;
