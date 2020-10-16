import { navigateTo } from "../../support/page_objects/navigationPage"
import { onFormLayoutsPage } from "../../support/page_objects/formLayoutsPage"
import { onDatePickerPage } from "../../support/page_objects/datepickerPage"
import { onSmartTablePage } from "../../support/page_objects/smartTablePage"

const runOn = (browser, fn) => {
    if (Cypress.isBrowser(browser)) {
      fn()
    }
  }
  
  const ignoreOn = (browser, fn) => {
    if (!Cypress.isBrowser(browser)) {
      fn()
    }
  }

describe('Test with Page Objects', () => {

    beforeEach('open application', () => {
        cy.openHomePage()
    })

ignoreOn('firefox', () => {
    it('verify navigations actoss the pages', () => {
        navigateTo.formLayoutsPage()
        navigateTo.datepickerPage()
        navigateTo.smartTablePage()
        navigateTo.tooltipPage()
        navigateTo.toasterPage()
    })
})
    

    it(' should submit Inline and Basic form and select tomorrow date in the calendar', () => {
        navigateTo.formLayoutsPage()
        onFormLayoutsPage.submitInlineFormWithNameAndEmail('Artem', 'test@test.com')
        onFormLayoutsPage.submitBasicFormWithEmailAndPassword('test@test.com', 'password')
        navigateTo.datepickerPage()
        onDatePickerPage.selectCommonDatepickerDateFromToday(1)
        // onDatePickerPage.selectDatepickerWithRangeFromToday(7, 14)
        // navigateTo.smartTablePage()
        // onSmartTablePage.addNewRecordWithFirstAndLastName('Artem', 'Bondar')
        // onSmartTablePage.updateAgeByFirstName('Artem', '35')
        // onSmartTablePage.deleteRowByIndex(1)
    })


})