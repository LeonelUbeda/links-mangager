from .models import Link
from rest_framework import viewsets, permissions
from .serializers import LinkSerializer


#Link Viewset

class LinkViewSet(viewsets.ModelViewSet):
    queryset = Link.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]

    serializer_class = LinkSerializer