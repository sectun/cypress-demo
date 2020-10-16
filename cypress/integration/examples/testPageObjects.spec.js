import { navigateTo } from "../support/page_objects/navigationPage"
import { onFormLayoutsPage } from "../support/page_objects/formLayoutsPage"
import { onDatePickerPage } from "../support/page_objects/datepickerPage"
import { onSmartTablePage } from "../support/page_objects/smartTablePage"


describe('Test with Page Objects', () => {

    beforeEach('open application', () => {
        cy.openHomePage()
    }) 

    it('Verify submission and form selection', () => {
        navigateTo.formLayoutsPage()
        onFormLayoutsPage.submitInlineFormWithNameAndEmail('secil', 'secil@test.com')
        onFormLayoutsPage.submitBasicFormWithEmailAndPassword('secil@test.com', 'password')
        navigateTo.datepickerPage()
        onDatePickerPage.selectCommonDatepickerDateFromToday(1)
        onDatePickerPage.selectDatepickerWithRangeFromToday(7, 14)
        navigateTo.smartTablePage()
        onSmartTablePage.addNewRecordWithFirstAndLastName('secil', 'tunc')
        onSmartTablePage.updateAgeByFirstName('gizem', '28')
        onSmartTablePage.deleteRowByIndex(1)
    })


})