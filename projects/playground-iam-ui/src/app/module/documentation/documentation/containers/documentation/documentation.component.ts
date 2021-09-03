import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { NgxTreeNodeComponent } from '../../../../../../../../ngx-iam-ui/src/ngx-tree/ngx-tree-node.component';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-documentation',
  templateUrl: './documentation.component.html',
  styleUrls: ['./documentation.component.scss'],
})
export class DocumentationComponent implements OnInit {
  @ViewChildren('treeChild') childTreeState: QueryList<NgxTreeNodeComponent>;
  state: boolean;
  items: any[];

  constructor(private route: Router, private activateRoute: ActivatedRoute) {
    this.activateRoute.data.subscribe({
      next: value => {
        console.log(value);
      },
    });
    // this.route.events
    //   .pipe(filter((event) => event instanceof NavigationEnd))
    //   .subscribe({
    //     next: (value) => {
    //       console.log('Events', value);
    //     },
    // });
    // this.activateRoute.data.subscribe(data => console.log(data));
  }

  ngOnInit() {
    this.items = [
      {
        label: 'Another',
        redirect: 'documentation',
      },
      {
        label: 'Components',
        children: [
          {
            label: 'Card',
            data: 'card',
          },
          {
            label: 'Card Page',
            data: 'card-page-id',
          },
          {
            label: 'Tree',
            data: 'tree-id',
          },
        ],
      },
      {
        label: 'Components Test',
        children: [
          {
            label: 'test-1',
            data: 'test-1',
          },
          {
            label: 'test-2',
            data: 'test-2',
          },
          {
            label: 'test-3',
            data: 'test-3',
          },
        ],
      },
    ];
  }

  onChangeState(childId: number) {
    // console.log(childId);
  }

  onCLick(chItem: number) {
    // console.log(chItem);
  }
}
