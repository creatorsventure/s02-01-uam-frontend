import {Component, OnInit} from '@angular/core';
import {OpsAbstract} from '../../../shared/abstract/ops.abstract';
import {ActivatedRoute} from '@angular/router';
import {CRUDService} from '../../../shared/services/crud.service';
import {FormBuilder} from '@angular/forms';
import {AppControlService} from '../../../shared/services/app.control.service';
import {AlertService} from '../../../shared/services/alert.service';
import {APP_NAVIGATION} from '../../../shared/routes/navigation.constant';

@Component({selector: 'app-role-ops', templateUrl: './role.ops.component.html', styles: [], standalone: false})
export class RoleOpsComponent extends OpsAbstract implements OnInit {
    public permissions: any = APP_NAVIGATION.permissions;

    constructor(
        public override fb: FormBuilder,
        public override activatedRoute: ActivatedRoute,
        public override crudService: CRUDService,
        public override appCtrlService: AppControlService,
        public override alertService: AlertService
    ) {
        super(fb, activatedRoute, crudService, appCtrlService, alertService);
    }

    ngOnInit(): void {
        super.init();
        this.crudForm = this.fb.group({            /* exampleField: this.appCtrlService.generateFormControl(CONTROL_DESCRIPTION.input, this.object?.exampleField) */});
    }

    override customUpdateValidations(): boolean {
        return true;
    }

    override customCreateValidations(): boolean {
        return true;
    }

    override customPostSuccessOps(): void {
    }

    override customPostFailureOps(): void {
    }
}
