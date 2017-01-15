import { makeType }  from './utils'

export const InterfaceActionTypes = {
	ADD:                makeType('[Interface] Add Action'),
	ADD_SUCCESS:        makeType('[Interface] Add Success Action'),
	ADD_FAIL:           makeType('[Interface] Add Fail Action'),
	UPDATE:             makeType('[Interface] Update Action'),
	UPDATE_SUCCESS:     makeType('[Interface] Update Success Action'),
	UPDATE_FAIL:        makeType('[Interface] Update Fail Action'),
	REMOVE:             makeType('[Interface] Remove Action'),
	REMOVE_SUCCESS:     makeType('[Interface] Remove Success Action'),
	REMOVE_FAIL:        makeType('[Interface] Remove Fail Action')
}

export const AccessActionTypes = {
	ADD:                makeType('[Access] Add Action'),
	ADD_SUCCESS:        makeType('[Access] Add Success Action'),
	ADD_FAIL:           makeType('[Access] Add Fail Action'),
	UPDATE:             makeType('[Access] Update Action'),
	UPDATE_SUCCESS:     makeType('[Access] Update Success Action'),
	UPDATE_FAIL:        makeType('[Access] Update Fail Action'),
	REMOVE:             makeType('[Access] Remove Action'),
	REMOVE_SUCCESS:     makeType('[Access] Remove Success Action'),
	REMOVE_FAIL:        makeType('[Access] Remove Fail Action')
}

export const AppActionTypes = {
	ADD:                makeType('[Application] Add Action'),
	ADD_SUCCESS:        makeType('[Application] Add Success Action'),
	ADD_FAIL:           makeType('[Application] Add Fail Action'),
	UPDATE:             makeType('[Application] Update Action'),
	UPDATE_SUCCESS:     makeType('[Application] Update Success Action'),
	UPDATE_FAIL:        makeType('[Application] Update Fail Action'),
	REMOVE:             makeType('[Application] Remove Action'),
	REMOVE_SUCCESS:     makeType('[Application] Remove Success Action'),
	REMOVE_FAIL:        makeType('[Application] Remove Fail Action')
}