import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/nx';
import { Customer, CustomersService } from '@workshop/core-data';
import { map } from 'rxjs/operators';
import { CustomersActionTypes, CustomersLoaded, LoadCustomers } from './customers.actions';
import { CustomersState } from './customers.reducer';

@Injectable()
export class CustomersEffects {
  @Effect()
  loadCustomers$ = this.dataPersistence.fetch(CustomersActionTypes.LoadCustomers, {
    run: (action: LoadCustomers, state: CustomersState) => {
      return this.customersService.all().pipe(map((res: Customer[]) => new CustomersLoaded(res)))
    },

    onError: (action: LoadCustomers, error) => {
      console.error('Error', error);
    }
  });

  constructor(
    private actions$: Actions,
    private dataPersistence: DataPersistence<CustomersState>,
    private customersService: CustomersService
  ) {}
}
