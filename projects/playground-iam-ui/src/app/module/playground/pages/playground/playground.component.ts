import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { NgxTreeNodeComponent } from '@ngx-iam-ui/components/ngx-tree';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.scss'],
})
export class PlaygroundComponent implements OnInit {
  @ViewChildren('treeChild') childTreeState: QueryList<NgxTreeNodeComponent>;
  state: boolean;
  items: any[];

  ngOnInit() {
    this.items = [
      {
        label: 'Another',
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

  onChangeState(indexChild: number): void {
    this.state = (this.childTreeState.get(indexChild) as any).isExpanded;
    console.log(this.childTreeState.get(indexChild));
    // console.log(indexChild);
    // console.log(this.childTreeState);
    // this.childTreeState.forEach((item) => {
    //   console.log(item);
    // });
    // this.childTreeState.find((select) => select.id === indexChild);
    // debugger;
    // this.state = getState;
  }

  onCLick(itemFromArray: any) {
    console.log(itemFromArray);
  }
}
